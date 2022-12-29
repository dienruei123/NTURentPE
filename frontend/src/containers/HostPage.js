import React, {useState} from "react"
import styled from "styled-components"
import HostBar from '../components/HostBar'
import Calendar from '../components/Calendar'
import Modal from '../components/EventModal'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const BodyWrapper = styled.div`
    margin: 100px;
    height: 90%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: auto;
`

const Host = () => {
    const [user, setUser] = useState("Oscar")
    const [info, setInfo] = useState([{"date": "12/31", "name": "New Year", "subtitle": "time flies", "property":["popular", "nice"]}])
    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        setModalOpen(true)
    }
    const handleClose = () => {
        setModalOpen(false)
    }

    return (
        <Wrapper>
            <HostBar UserName={user} handleModal={handleModal}/>
            <BodyWrapper>
                <Modal open={modalOpen} handleClose={handleClose}/>
                <Calendar />
                <div>event1</div>
                <div>event2</div>
                <div>event3</div>
            </BodyWrapper>
        </Wrapper>
    )
}

export default Host