import React, {useState} from "react";
import './Button.css';

const Button = (props) => {
    const [classname, setClassname] = useState(props.class)
    const [title, setTitle] = useState(props.title)
    const onClick = () => {
        //Replace if with switch
        if (title === "Read more") {
            setTitle("Read less")
            setClassname('btnReadLess')
            props.showMore(true);
        }

        if (title === "Read less") {
            setTitle("Read more")
            setClassname('btnReadMore')
            props.showMore(false);
        }

        if (classname === "removeActor") {
            props.removeActorId(props.actorId);
        }

        if (classname === "btnEdit") {
            props.editActorId(props.actorId);
        }

        if (classname === "closeModal") {
            props.closeModal(true);
        }

        if (classname === "btnSelect") {
            props.selectModal(true);
        }

        if (classname === "alertCloseWarning") {
            props.hideMaxNumber(true);
        }
        
        if (classname === "btnSort") {
            props.sortModal(true);
        }

        if (classname === "chooseActor") {
            setClassname('isChooseActor')
            localStorage.setItem("numberOfSelectedActors", parseInt(localStorage.getItem("numberOfSelectedActors")) + 1);
            props.isChoosen(true);
            let arrActorsId = []
            if (localStorage.getItem("actorsToDelete") !== '')
                arrActorsId = localStorage.getItem("actorsToDelete").split(',')
            arrActorsId.push(props.actorId)
            localStorage.setItem("actorsToDelete",arrActorsId)
            if (document.getElementsByClassName("modalSelectContainer")[0] != null) 
                document.getElementsByClassName("modalSelectContainer")[0].getElementsByTagName("button")[2].style.opacity=1
        } else if (classname === "isChooseActor") {
            setClassname('chooseActor')
            if (parseInt(localStorage.getItem("numberOfSelectedActors")) > 0) {
                localStorage.setItem("numberOfSelectedActors", parseInt(localStorage.getItem("numberOfSelectedActors")) + -1);
            }
            props.isChoosen(false)
            let arrActorsId = []
            localStorage.getItem("actorsToDelete").split(',').forEach(id => {
                if (parseInt(id) !== props.actorId)
                    arrActorsId.push(id)
            })
            localStorage.setItem("actorsToDelete", arrActorsId)
        }

        if (classname === "selectAll") {
            setClassname('selectAllSelected')
            props.selectedAll(true)
            localStorage.setItem("numberOfSelectedActors", document.getElementsByClassName("listOfActors")[0].getElementsByClassName('evenCard').length + document.getElementsByClassName("listOfActors")[0].getElementsByClassName('oddCard').length)
            if (document.getElementsByClassName("modalSelectContainer")[0] != null)
                document.getElementsByClassName("modalSelectContainer")[0].getElementsByTagName("h2")[0].textContent = localStorage.getItem("numberOfSelectedActors")+" Selected"
        } else if (classname === "selectAllSelected") {
            setClassname('selectAll')
            props.selectedAll(false)
            localStorage.setItem("numberOfSelectedActors", 0);
            if (document.getElementsByClassName("modalSelectContainer")[0] != null)
                document.getElementsByClassName("modalSelectContainer")[0].getElementsByTagName("h2")[0].textContent = localStorage.getItem("numberOfSelectedActors")+" Selected"
        }

        if (classname === "btnDelete set_margin_top") {
            props.deleteActors(true)
        }

        if (classname === "btnDelete btnDeleteSelected") {
            props.deleteActors(true)
        }

        if (classname === "btnSortAscending") {
            props.sortAscending(true)
        }

        if (classname === "btnSortDescending") {
            props.sortDescending(true)
        }

        if (classname === "btnAddNewActor" || classname === 'btnAddNewActor resizeWidth' || classname === "btnAddNewActor moveCenter") {
            props.addNewActor(true)
        }

        if (classname === "setMargin btnAddNewActor deleteActor") {
            props.deleteActor(true)
        }
    }
    return(
        <button className={classname} onClick={onClick}>{title}</button>
    )
}

export default Button;