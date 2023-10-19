import React, { useEffect, useState } from 'react';
import { LiaCircleSolid } from 'react-icons/lia'
import { HiPlusSmall } from 'react-icons/hi2'
import { PiDotsThreeBold } from 'react-icons/pi'
import { TbProgressCheck } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { GoDotFill } from 'react-icons/go'
import { TbCircleDotted } from 'react-icons/tb'
import Avatar from 'react-avatar';
import './filter.css'

const Card = ({ item }) => {
    return (
        <div className='card-box'>
            <div className='card-id'>{item.id}</div>
            <div className='card-title'>{item.title}</div>
            <div className='card-features'>
                <PiDotsThreeBold style={{ marginRight: '10px' }} />
                <span className='feature-request' style={{ color: 'grey' }}><GoDotFill style={{ color: 'grey', marginRight: '2px' }} />Features Request</span>
            </div>
            <div className="imageContainer relative" style={{ width: '30px', height: '30px',position: 'absolute', right: '-55px', top: '10px'}}>
                <img
                    style={{ width: '25px', height: '25px', borderRadius: '50%' }}
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt="UserImage"
                />
                <div className="showStatus"></div>
            </div>
        </div>
    );
};

const Status = ({data}) => {
    console.log(data)

    const filteredTickets = (status) => {
        if (data && Array.isArray(data)) {
            return data.filter(ticket => ticket.status.toLowerCase() === status.toLowerCase());
        }
        return [];
    };
    const todoTickets = filteredTickets('Todo');
    const backlogTickets = filteredTickets('Backlog');
    const inProgressTickets = filteredTickets('In progress');
    const doneTickets = filteredTickets('Done');
    const canceledTickets = filteredTickets('Canceled');


    useEffect(() => {
        console.log(todoTickets)
    }, [data, todoTickets]);


    return (
        <div>
            {!data && <div>Loading...</div>}
            {data && <div className='filter-by-status'>
                <div className='backlog'>
                    <div className='title-bar'>
                        <div className='title'>
                            <TbCircleDotted style={{ color: 'red' }} />
                            <span>Backlog</span>
                            {<span>{backlogTickets.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>
                    </div>
                    <div className='backlog-cards'>
                        {
                            backlogTickets.map((items, idx) => {
                                return (
                                    <Card key={idx} item={items} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='todo'>
                    <div className='title-bar'>
                        <div className='title'>
                            <LiaCircleSolid />
                            <span>Todo</span>
                            {<span>{todoTickets.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>

                    </div>
                    <div className='backlog-cards'>
                        {
                            todoTickets.map((items, idx) => {
                                return (
                                    <Card key={idx} item={items} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='inProgress'>
                    <div className='title-bar'>
                        <div className='title'>
                            <TbProgressCheck style={{ color: '#F1CA4C' }} />
                            <span>In Progress</span>
                            {<span>{inProgressTickets.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>
                    </div>
                    <div className='backlog-cards'>
                        {
                            inProgressTickets.map((items, idx) => {
                                return (
                                    <Card key={idx} item={items} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='done'>
                    <div className='title-bar'>
                        <div className='title'>
                            <BsFillCheckCircleFill style={{ color: '#5E6AD2' }} />
                            <span>Done</span>
                            {<span>{doneTickets.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>
                    </div>
                    <div className='backlog-cards'>
                        {
                            doneTickets.map((items, idx) => {
                                return (
                                    <Card key={idx} item={items} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='canceled'>
                    <div className='title-bar'>
                        <div className='title'>
                            <AiFillCloseCircle style={{ color: '#999CA1' }} />
                            <span>Canceled</span>
                            {<span>{canceledTickets.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>
                    </div>
                    <div className='backlog-cards'>
                        {
                            canceledTickets.map((items, idx) => {
                                return (
                                    <Card key={idx} item={items} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Status;
