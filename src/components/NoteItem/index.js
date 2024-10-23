// Write your code here

import {ListItem, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {noteText, title} = noteDetails

  return (
    <ListItem>
      <Title>{title}</Title>
      <Note>{noteText}</Note>
    </ListItem>
  )
}

export default NoteItem
