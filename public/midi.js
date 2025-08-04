// public/midi.js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    await WebMidi.enable();

    WebMidi.inputs.forEach(input => {
      console.log(`Input detected: ${input.name}`);
      input.addListener("noteon", "all", e => {
        console.log(`Note on: ${e.note.name}${e.note.octave} (velocity: ${e.velocity})`);
      });
    });

  } catch (err) {
    console.error("Could not enable WebMIDI:", err);
  }
});

const myInput = WebMidi.getInputByName("MPK mini 3");
myInput.addListener("noteon", e => {
  console.log(e.note.identifier);
})