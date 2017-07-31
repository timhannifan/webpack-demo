import { connect } from 'react-redux'
import ListExample from '../components/ListExample'
import { toggleItem } from '../actions'

const getVisibleItems = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.hidden)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.hidden)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const mapStateToProps = (state) => {
	console.log(state)
	return {
	  items: getVisibleItems([{id: 0, text: 'item 1', hidden: false },{id: 1, text: 'item 2', hidden: true }], state.visibilityFilter)
	}
}
const mapDispatchToProps = ({
  onItemClick: toggleItem
})


const ListExampleContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListExample);

export default ListExampleContainer