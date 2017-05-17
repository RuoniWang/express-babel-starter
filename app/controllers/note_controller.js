import Note from '../models/note_model';

export const createNote = (field) => {
  const note = new Note();
  note.title = field.title;
  note.text = field.text;
  note.x = field.x;
  note.y = field.y;
  note.zIndex = field.zIndex;
  return note.save();
};


export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};
export const deleteNote = (id) => {
  return Note.findById(id).remove();
};

export const updateNote = (id, fields) => {
  return Note.findById(id).then((note) => {
    Object.keys(fields).forEach((k) => {
      note[k] = fields[k];
    });
    return note.save();
  });
};
