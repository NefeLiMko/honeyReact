import React, { Component } from "react"

export class ProductList extends Component {

	render() {
		if (this.props.products == null || this.props.products.length === 0) {
			return <h5 className="p-2"> No products</h5>
		}
		return this.props.products.map(p =>
			<div class="card m-1 p-1 bg-light" key={p.id}>
				<h4>
					{p.name}
					<span class="badge m-1 p-1 bg-light" key={p.id}>
						${p.price.to_Fixed(2)}
					</span>
				</h4>
				<div class="card-text bg-white p-1">
					{p.description}


				</div>
			</div>
		)
	}
}