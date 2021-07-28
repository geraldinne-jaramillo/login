import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://raw.githubusercontent.com/jennymontoya1001/heroes/main/marvel-hulk.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    sdfjlsjflsjadfjkjdlskdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                </p>
                <div className="journal__entry-body">
                    <span>Monday</span>
                    <h4>28</h4>
                </div>
            </div>



        </div>
    )
}
