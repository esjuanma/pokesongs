const notes = `octave 4
note G_, 6
note E_, 6
note F#, 4
note G_, 6
note A_, 6
note G_, 4
note E_, 6
note F#, 6
note E_, 4
note G_, 6
note E_, 6
note D_, 4
note G_, 6
note E_, 6
note F#, 4
note G_, 6
note A_, 6
note G_, 4
note E_, 6
note F#, 6
note A_, 4
note G_, 6
note E_, 6
note D_, 4
note C_, 8
note D_, 8
note G_, 8
note E_, 4
note D_, 4
note C_, 8
note D_, 8
note G_, 8
note A_, 4
note G_, 4
note E_, 8
note A_, 8
note E_, 8
note G_, 8
note F#, 8
note E_, 8
note E_, 8
note F#, 8`.split("\n").reduce((notes, note) => {
    let match;

    if (match = note.match(/octave (\d)/)) {
        notes.octave = match[1];
    } else if (match = note.match(/note (.{2}), (\d)/)) {
        notes.notes.push({
            note: match[1].replace("_", "") + notes.octave,
            time: match[2] + "n"
        });
    } else if (match = note.match(/rest (\d+)/)) {
        notes.notes.push(...Array(+match[1]).fill(null))
    }

    return notes;
}, { notes: [] }).notes;

//function reducer 

`octave 3
note B_, 4
octave 4
note C_, 2
note D_, 4
note G_, 2
note D_, 2
note C_, 2
octave 3
note B_, 4
note G_, 2
octave 4
note D_, 4
note D_, 2
note C_, 2
octave 3
note B_, 2
rest 2
note B_, 2
octave 4
note C_, 2
octave 3
note B_, 2
octave 4
note C_, 8
rest 2
octave 3
note B_, 2
octave 4
note C_, 2
octave 3
note A_, 2
note B_, 2
note G_, 2
note A_, 2
note F#, 2
note B_, 4
octave 4
note C_, 2
note D_, 4
note G_, 2
note D_, 2
note C_, 2
octave 3
note B_, 4
note G_, 2
octave 4
note D_, 4
note D_, 2
note G_, 2
note F#, 2
note E_, 4
note D_, 2
note C_, 4
octave 3
note A_, 2
note B_, 2
octave 4
note C_, 2
note D_, 2
note C_, 2
octave 3
note B_, 2
note A_, 2
note G_, 4
note F#, 4
octave 4
note C_, 2
octave 3
note G_, 2
note E_, 2
note G_, 2
octave 4
note D_, 2
octave 3
note A_, 2
note F#, 2
note A_, 2
note_type 12, 11, 3
note B_, 2
note G_, 2
note D_, 2
note G_, 2
note B_, 2
note G_, 2
note D_, 2
note G_, 2
octave 4
note C_, 2
octave 3
note G_, 2
note E_, 2
note G_, 2
octave 4
note D_, 2
octave 3
note A_, 2
note F#, 2
note A_, 2
note B_, 2
note G_, 2
note D_, 2
note G_, 2
note B_, 2
note G_, 2
note D_, 2
note G_, 2
note A_, 2
note E_, 2
note C_, 2
note E_, 2
note A_, 2
note E_, 2
note C_, 2
note E_, 2
note A_, 2
note E_, 2
note C_, 2
note E_, 2
note A_, 2
note E_, 2
note C_, 2
note E_, 2
note F#, 2
note D_, 2
note C_, 2
note D_, 2
note G_, 2
note E_, 2
note C_, 2
note E_, 2
note G_, 2
note E_, 2
note C_, 2
note E_, 2
note F#, 2
note D_, 2
note C_, 2
note D_, 2`