import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import {PiDotsThreeBold} from 'react-icons/pi'
import {GoDotFill} from 'react-icons/go'
import './filterbyUser.css';

const Card = ({ item }) => {
    return (
        <div className='card-box'>
            <div className='card-id'>{item.id}</div>
            <div className='card-title'>{item.title}</div>
            <div className='card-features'>
                <PiDotsThreeBold style={{marginRight: '10px'}}/>
                <span className='feature-request' style={{color: 'grey'}}><GoDotFill style={{color: 'grey', marginRight: '2px'}}/>Features Request</span>
            </div>
        </div> 
    );
};

const FilterByUser = () => {
    const [data, setData] = useState([]);
    const [ticketsByUser, setTicketsByUser] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (data && data.users && data.tickets) {
            const ticketsByUser = data.users.map(user => {
                return { user, tickets: [] };
            });

            // Iterate through the tickets and populate the 2D array
            data.tickets.forEach(ticket => {
                const userIndex = data.users.findIndex(user => user.id === ticket.userId);
                if (userIndex !== -1) {
                    ticketsByUser[userIndex].tickets.push(ticket);
                }
            });
            setTicketsByUser(ticketsByUser);
            console.log(ticketsByUser)
        }
    }, [data]);

    return (
        <div className="filter-by-users">
            {data && (
                <div className="user-list">
                    {ticketsByUser && ticketsByUser.map((user, idx) => (
                        <div key={idx} className="users">
                            <div className='title-bar'>
                                <div className="user-profile">
                                    <div className="imageContainer relative" style={{ width: '30px', height: '30px' }}>
                                        <img
                                            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                                            alt="UserImage"
                                        />
                                        <div className="showStatus"></div>
                                    </div>
                                    <span>{user.user.name}</span>
                                    <span>{user.tickets.length}</span>
                                </div>
                                <div className="title-icon">
                                    <FiPlus />
                                    <BsThreeDots />
                                </div>
                            </div>
                            <div className='user-cards'>
                                {user.tickets.map((item, index) => (
                                    <Card key={index} item={item}/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterByUser;
