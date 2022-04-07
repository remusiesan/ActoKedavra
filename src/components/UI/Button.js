import React, {useState} from "react";
import './Button.css';

const Button = (props) => {
    // const [idActor, setIndexActor] = useState(0)
    const [classname, setClassname] = useState(props.class)
    const [title, setTitle] = useState(props.title)
    const onClick = () => {
        //Replace if with switch
        if(title === "Read more"){
            setTitle("Read less")
            setClassname('btn_read_less')
            props.showMore(true);
        }

        if(title === "Read less"){
            setTitle("Read more")
            setClassname('btn_read_more')
            props.showMore(false);
        }

        if(classname === "remove_actor"){
            props.removeActorId(props.actorId);
        }

        if(classname === "btn_edit"){
            props.editActorId(props.actorId);
        }

        if(classname === "close_modal"){
            props.closeModal(true);
        }

        if(classname === "btn_select"){
            props.selectModal(true);
        }

        if(classname === "btn_sort"){
            props.sortModal(true);
        }

        if(classname === "choose_actor"){
            setClassname('is_choose_actor')
            localStorage.setItem("numberOfSelectedActors", parseInt(localStorage.getItem("numberOfSelectedActors")) + 1);
            props.isChoosen(true);
            let arrActorsId = []
            if(localStorage.getItem("actorsToDelete") !== '')
                arrActorsId = localStorage.getItem("actorsToDelete").split(',')
            arrActorsId.push(props.actorId)
            localStorage.setItem("actorsToDelete",arrActorsId)
            document.getElementsByClassName("modalSelectContainer")[0].getElementsByTagName("button")[2].style.opacity=1
        } else if(classname === "is_choose_actor"){
            setClassname('choose_actor')
            if(parseInt(localStorage.getItem("numberOfSelectedActors")) > 0){
                localStorage.setItem("numberOfSelectedActors", parseInt(localStorage.getItem("numberOfSelectedActors")) + -1);
            }
            props.isChoosen(false)
            let arrActorsId = []
            localStorage.getItem("actorsToDelete").split(',').forEach(id => {
                if(parseInt(id) !== props.actorId)
                    arrActorsId.push(id)
            })
            localStorage.setItem("actorsToDelete", arrActorsId)
        }

        if(classname === "selectAll"){
            setClassname('selectAllSelected')
            props.selectedAll(true)
            localStorage.setItem("numberOfSelectedActors", document.getElementsByClassName("list_of_actors")[0].getElementsByClassName('even_card').length + document.getElementsByClassName("list_of_actors")[0].getElementsByClassName('odd_card').length)
            document.getElementsByClassName("modalSelectContainer")[0].getElementsByTagName("h2")[0].textContent = localStorage.getItem("numberOfSelectedActors")+" Selected"
        } else if(classname === "selectAllSelected"){
            setClassname('selectAll')
            props.selectedAll(false)
            localStorage.setItem("numberOfSelectedActors", 0);
            document.getElementsByClassName("modalSelectContainer")[0].getElementsByTagName("h2")[0].textContent = localStorage.getItem("numberOfSelectedActors")+" Selected"
        }

        if(classname === "btn_delete set_margin_top"){
            props.deleteActors(true)
        }

        if(classname === "btn_sort_ascending"){
            props.sortAscending(true)
        }

        if(classname === "btn_sort_descending"){
            props.sortDescending(true)
        }
    }
    return(
        <button className={classname} onClick={onClick}>{title}</button>
    )
}

export default Button;