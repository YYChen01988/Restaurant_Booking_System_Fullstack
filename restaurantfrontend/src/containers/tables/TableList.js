import React from 'react';
import Table from '../../components/tables/Table'

const TableList = (props) => {
	if(!props.tables){
		return null
	}

	const tables = props.tables.map((table) => {
		return <Table table={table} key={table.id}/>
	})

	return (
		<React.Fragment>
			<h1>Tables</h1>
			<table>
				<tbody>
					<tr>
						<th>Table Number</th>
						<th>Capacity</th>
					</tr>
					{tables}
				</tbody>
			</table>
		</React.Fragment>
	)
}

export default TableList;
