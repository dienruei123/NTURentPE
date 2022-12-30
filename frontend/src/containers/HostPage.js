import React, {useState} from "react"
import styled from "styled-components"
import HostBar from '../components/HostBar'
import Calendar from '../components/Calendar'
import Modal from '../components/EventModal'
import ProposalList from '../components/ProposalList'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const BodyWrapper = styled.div`
    margin-top: 100px;
    height: 90%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    overflow: auto;
`

const EventWrapper = styled.div`
    height:100%;
    width:30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    overflow: auto;
`

const Host = () => {
    const [user, setUser] = useState("Oscar")
    const [info, setInfo] = useState([{"date": "12/31", "name": "New Year", "property":"success" }
    ,{"date": "1/6", "name": "Music Presentation", "property":"progressing"}                        
    ])
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
                <EventWrapper>
                    <ProposalList info={info}></ProposalList>
                </EventWrapper>
            </BodyWrapper>
        </Wrapper>
    )
}

export default Host