import styled from "styled-components"
import AppBar from '../components/AppBar'
import Calendar from '../components/Calendar'

const Wrapper = styled.div`
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const BodyWrapper = styled.div`
    margin: 100px;
    top: 50%;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: center;
`

const Participant = () => {
    return (
        <Wrapper>
            <AppBar />
            <BodyWrapper>
                 <Calendar />
            </BodyWrapper>
           
        </Wrapper>
    )
}

export default Participant