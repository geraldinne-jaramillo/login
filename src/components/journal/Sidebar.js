import React from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch } from 'react-redux'


export const Sidebar = () => {

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <div className="journal__sidebar-user">
                    <h3 className="mt-1">
                        <img className="journal__img"
                            src="https://raw.githubusercontent.com/jennymontoya1001/heroes/main/marvel-spider.jpg" alt="" />

                    Silvia
                    </h3>
                </div>


                <div className="journal__new-entry">
                    <i className="far fa-calendar-plus fa-2x"></i>
                    
                </div>

                <button className="btn">
                    Logout
                </button>
            </div>

            <JournalEntries />

        </aside>
    )
}
