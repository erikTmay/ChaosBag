import React from 'react';
import {Button} from 'react-bootstrap';
import './tokenPuller.css';

const TokenPuller = (props) => {
    function renderRevealedTokens() {
        return props.revealedTokens.map((revealedToken, index) => {
            return (
                <div key={index} >
                    <img src={revealedToken.imagePath} alt={revealedToken.type} onClick={() => props.onRevealedTokenClick(revealedToken.id, revealedToken.type)}/>
                </div>
            );
        })
    }
    return (
        <div className="tokenPuller">
            <Button onClick={props.onPullToken} bsStyle="primary">Pull Token</Button>
            <div className="results">
                {renderRevealedTokens()}
            </div>
        </div>
    );
}

TokenPuller.propTypes = {
    onPullToken: React.PropTypes.func.isRequired,
    onRevealedTokenClick: React.PropTypes.func.isRequired,
    revealedTokens: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        imagePath: React.PropTypes.string.isRequired,
   })).isRequired
};

export default TokenPuller;
