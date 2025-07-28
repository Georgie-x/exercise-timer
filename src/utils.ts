import React from "react"
import type { UserInputs } from "./types"

type StatusUpdate = {
	exercise?: number
	set?: number
	rep?: number
	done?: boolean
}

export async function playWorkoutAudioSequence(
	audioRef: React.RefObject<HTMLAudioElement | null>,
	config: UserInputs,
	updateStatus?: (status: StatusUpdate) => void
) {
	const { exercises, sets, reps, setTime, repTime } = config

	const delay = (seconds: number) => new Promise((res) => setTimeout(res, seconds * 1000))

	const playAudio = (src: string) =>
		new Promise<void>((resolve) => {
			if (!audioRef.current) return resolve()

			audioRef.current.src = src
			audioRef.current.onended = () => resolve()
			audioRef.current.play()
		})

	await playAudio("/audio/start.wav")

	for (let ex = 1; ex <= exercises; ex++) {
		for (let set = 1; set <= sets; set++) {
			for (let rep = 1; rep <= reps; rep++) {
				updateStatus?.({ exercise: ex, set, rep })
				await playAudio("/audio/one-rep.wav")
				await delay(repTime)
			}
			await playAudio("/audio/one-set.wav")
			await delay(setTime)
		}
	}

	await playAudio("/audio/final.wav")
	updateStatus?.({ done: true })
}
