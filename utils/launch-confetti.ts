import JSConfetti from "js-confetti";

let jsConfetti: JSConfetti | null = null;

export default function launchConfetti() {
  if (typeof window === "undefined") {
    return;
  }

  if (!jsConfetti) {
    jsConfetti = new JSConfetti();
  }

  jsConfetti.addConfetti({
    confettiColors: ["#FFC700", "#FF0000", "#2E3191", "#41BBC7", "#00FF00"],
    confettiRadius: 5,
    confettiNumber: 300,
  });
}
