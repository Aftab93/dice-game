import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
    return(
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="dice" />
            </div>
            <p>Click On Dice to Roll</p>
        </DiceContainer>
    )
}
export default RollDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;

    .dice {
        cursor: pointer;
    }

    img {
        width: 120px;
    }
`