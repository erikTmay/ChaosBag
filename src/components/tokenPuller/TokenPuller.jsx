import React from 'react';
import './tokenPuller.css';

const TokenPuller = (props) => {
    function renderRevealedTokens() {
        return props.revealedTokens.map((revealedToken, index) => {
            return (
                <div key={revealedToken.id} >
                    <img src={revealedToken.imagePath} alt={revealedToken.type} onClick={() => props.onRevealedTokenClick(revealedToken.id, revealedToken.type)}/>
                </div>
            );
        })
    }
    return (
        <div className="tokenPuller">
            <button onClick={props.onPullToken}>Pull Token</button>
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
        id: React.PropTypes.number.isRequired,
        type: React.PropTypes.string.isRequired,
        imagePath: React.PropTypes.string.isRequired,
   })).isRequired
};

export default TokenPuller;