import styled from "styled-components"
import AppBar from '../components/AppBar2'
import Calendar from '../components/Calendar'

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
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Participant = () => {
    return (
        <Wrapper>
            <AppBar />
            <BodyWrapper>
                 <Calendar />
                 <div>event1</div>
                 <div>event2</div>
                 <div>event3</div>
                 <div>event4</div>
            </BodyWrapper>
        </Wrapper>
    )
}

export default Participant