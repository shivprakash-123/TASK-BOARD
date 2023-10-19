import React, { useEffect, useState } from 'react';
import { TbAlertSquareFilled, TbCircleCheckFilled } from 'react-icons/tb'
import { HiPlusSmall } from 'react-icons/hi2'
import { PiDotsThreeBold } from 'react-icons/pi'
import { PiCellSignalHighBold } from 'react-icons/pi'
import { PiCellSignalHighLight } from 'react-icons/pi'
import { PiCellSignalLowBold } from 'react-icons/pi'
import { GoDotFill } from 'react-icons/go'
import './Prority.css'

const Card = ({ item }) => {
    console.log(item)
    return (
        <div className='card-box' style={{position: 'relative'}}>
            <div className='card-id'>{item.id}</div>
            <div className='cardTitle'>
                {/* {item.priority == 0 ? <RiCheckboxBlankCircleLine /> : <TbCircleCheckFilled />} */}
                <span>{item.title}</span>
            </div>
            <div className='card-features'>
                <PiDotsThreeBold style={{ marginRight: '10px' }} />
                <span className='feature-request' style={{ color: 'grey' }}><GoDotFill style={{ color: 'grey', marginRight: '2px' }} />Features Request</span>
            </div>
            <div className="imageContainer relative" style={{ width: '30px', height: '30px', position: 'absolute', right: '-55px', top: '10px'}}>
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

const Priority = ({data}) => {
    const filteredTickets = (priority) => {
        if (data && Array.isArray(data)) {
            return data.filter(ticket => ticket.priority === priority); // Fix the typo here
        }
        return [];
    };
    const p1 = filteredTickets(1);
    const p2 = filteredTickets(2);
    const p3 = filteredTickets(3);
    const p4 = filteredTickets(4);
    const p5 = filteredTickets(5);


    useEffect(() => {
        console.log(p1)
    }, [data, p1]);


    return (
        <div>
            {!data && <div>Loading...</div>}
            {data && <div className='filter-by-status'>
                <div className='backlog'>
                    <div className='title-bar'>
                        <div className='title'>
                            <PiDotsThreeBold />
                            <span>No priority</span>
                            {<span>{p2.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>
                    </div>
                    <div className='backlog-cards'>
                        {
                            p2.map((items, idx) => {
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
                            <TbAlertSquareFilled color='rgb(248,97,50)' />
                            <span>Urgent</span>
                            {<span>{p1.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>

                    </div>
                    <div className='backlog-cards'>
                        {
                            p1.map((items, idx) => {
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
                            <PiCellSignalHighBold style={{ color: 'grey', fontSize: '25px' }} />
                            <span>High</span>
                            {<span>{p3.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>
                    </div>
                    <div className='backlog-cards'>
                        {
                            p3.map((items, idx) => {
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
                            <PiCellSignalHighLight style={{ color: 'grey', fontSize: '25px' }} />
                            <span>Medium</span>
                            {<span>{p4.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>
                    </div>
                    <div className='backlog-cards'>
                        {
                            p4.map((items, idx) => {
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
                            <PiCellSignalLowBold style={{ color: 'grey', fontSize: '25px' }} />
                            <span>Low</span>
                            {<span>{p5.length}</span>}
                        </div>
                        <div className='title-icons'>
                            <HiPlusSmall />
                            <PiDotsThreeBold />
                        </div>
                    </div>
                    <div className='backlog-cards'>
                        {
                            p5.map((items, idx) => {
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

export default Priority;
