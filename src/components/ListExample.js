import React from 'react'
import PropTypes from 'prop-types'
import Filters from './Filters'

const ListItem = ({ onClick, hidden, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: hidden ? 'line-through' : 'none'
    }}
  >
    {text}: {hidden}
  </li>
)

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}


const ListExample = ({items}) => {

	console.log(items);


	return (
		<div>
			<Filters/>
			<ul>
			  {items.map(item =>
			    <ListItem
			      key={item.id}
			      {...item}
			      onClick={() => onItemClick(item.id)}
			    />
			  )}
			</ul>
		</div>
	)
}

ListExample.PropTypes = {
	items: PropTypes.array.isRequired,
	onItemClick: PropTypes.func.isRequired
}


export default ListExample