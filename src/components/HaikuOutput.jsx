import React, {useContext, useEffect} from 'react';
import WordLink from './WordLink';

import {Store} from "../Store";
import syllable from "syllable";

const HaikuOutput = () => {
    const {state} = useContext(Store);

    const formatLine = (lineText, line) => {
        return lineText.split(' ').map((word, index) => {
            return (
                <div>
                        <WordLink word={word} line={line} index={index} />
                        <div
                            style={{fontSize: '18px', fontFamily: state.font, color: 'black' }}
                        >
                            {syllable(word) ? syllable(word) : ''}
                        </div>
                </div>
            )
        })
    };

    const totalLineSyllables = line => {
        return line ? "  " + syllable(line) : '';
    };

    const lineDetails = {
        first: {
            total: totalLineSyllables(state.firstLine),
            color: parseInt(totalLineSyllables(state.firstLine)) === 5 ? 'green' : 'red'
        },
        second: {
            total: totalLineSyllables(state.secondLine),
            color: parseInt(totalLineSyllables(state.secondLine)) === 7 ? 'green' : 'red'
        },
        third: {
            total: totalLineSyllables(state.thirdLine),
            color: parseInt(totalLineSyllables(state.thirdLine)) === 5 ? 'green' : 'red'
        }
    };

    return (
            <section>
                <div className="columns">
                        {formatLine(state.firstLine, 'firstLine')}
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: lineDetails.first.color, justifyContent: 'space-between'}}
                        className="column is-narrow is-pulled-left"
                    >
                        {lineDetails.first.total}
                    </div>
                </div>

                <div className="columns">
                    {formatLine(state.secondLine, 'secondLine')}
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: lineDetails.second.color, justifyContent: 'space-between'}}
                        className="column is-narrow is-pulled-left"
                    >
                        {lineDetails.second.total}
                    </div>
                </div>

                <div className="columns">
                    {formatLine(state.thirdLine, 'thirdLine')}
                    <div
                        style={{fontSize: '32px', fontFamily: 'brush', color: lineDetails.third.color, justifyContent: 'space-between'}}
                        className="column is-narrow is-pulled-left"
                    >
                        {lineDetails.third.total}
                    </div>
                </div>
            </section>
)
};

export default HaikuOutput;