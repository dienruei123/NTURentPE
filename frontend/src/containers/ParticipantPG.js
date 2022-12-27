import styled from "styled-components"
<<<<<<< HEAD
import AppBar from '../components/AppBar2'
import Calendar from '../components/Calendar'

const Wrapper = styled.div`
    height: 100%;
=======
import AppBar from '../components/AppBar'
import Calendar from '../components/Calendar'

const Wrapper = styled.div`
    height: 600px;
>>>>>>> upload participant page
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const BodyWrapper = styled.div`
    margin: 100px;
<<<<<<< HEAD
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
=======
    top: 50%;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: center;
>>>>>>> upload participant page
`

const Participant = () => {
    return (
        <Wrapper>
            <AppBar />
            <BodyWrapper>
                 <Calendar />
<<<<<<< HEAD
                 <div>event1</div>
                 <div>event2</div>
                 <div>event3</div>
                 <div>event4</div>
            </BodyWrapper>
=======
            </BodyWrapper>
           
>>>>>>> upload participant page
        </Wrapper>
    )
}

export default Participant