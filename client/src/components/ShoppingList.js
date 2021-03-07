import React, { useState } from 'react';
import {Button, ListGroup, ListGroupItem, Container} from 'reactstrap'
import {v4 as uuid} from 'uuid';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const ShoppingList = () => {
    const [items, setItems] = useState([
        {id : uuid(), name : "Bag"},
        {id : uuid(), name : "Milk"},
        {id : uuid(), name : "Guitar"},
        {id : uuid(), name : "Shoes"}
    ])

    const addNewItem = (name) => {
        let existingItems = [...items]
        existingItems.push({
            id : uuid(),
            name
        })
        setItems(existingItems)
    }

    const deleteNewItem = (id) => {
        console.log(id)
        let finalItems = items.filter((item) => item.id != id)
        setItems(finalItems)
    }

    return (
        <div>
            <Container>
                <Button color = "dark" style = {{marginBottom : "2rem"}} onClick = {() => {
                    let name = prompt("Enter Item")
                    if(name){
                        addNewItem(name)
                    }
                }}>Add Item</Button>

            <ListGroup>
                <TransitionGroup className = "shopping-list">
                    {items.map(({id, name}) => {
                        return (
                            <CSSTransition timeout = {500} key = {id} classNames = "fade">
                                <ListGroupItem>
                                    <Button color = "danger" size = "sm" className = "remove-btn" onClick = {() => deleteNewItem(id)}>
                                        &times;
                                    </Button>    
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ListGroup>
            </Container>

            
        </div>
    );
};

export default ShoppingList;