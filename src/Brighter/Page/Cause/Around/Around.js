import React from 'react';
import './Around.css'
import user from '../../../Image/Group 17.png'
import { AiFillStar } from "react-icons/ai";
const Around = () => {
    return (
        <div>
            <div className="around-area">
                <div className="container">
                    <div className="title-area">
                        <p>What they say</p>
                        <h2>Word Around</h2>
                    </div>
                    <div className="row">
                        <div className="around-left">
                            <div className="single-around">
                                <p>“In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.”</p>
                                <div className="around-user">
                                    <img src={user} alt="" />
                                    <div className="around-user-info">
                                        <h4>Jack McKinney</h4>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>
                            </div>
                            <div className="single-around">
                                <p>“As quantum mechanics developed further, it turned out that there were a large number of things which were not directly encompassed in the Schrödinger equation—such as the spin of the electron, and various relativistic phenomena. The mathematics that is involved is particularly simple, involving simple algebraic operations and no differential equations or at most only very simple ones.”</p>
                                <div className="around-user">
                                    <img src={user} alt="" />
                                    <div className="around-user-info">
                                        <h4>Jack McKinney</h4>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="around-right">
                            <div className="single-around">
                                <p>“But they are, we assure you, by all odds the simplest parts—in a deep sense of the word—as well as the most basic parts. This is frankly a pedagogical experiment; it has never been done before, as far as we know.The mathematics that is involved is particularly simple, involving simple algebraic operations and no differential equations or at most only very simple ones.”</p>
                                <div className="around-user">
                                    <img src={user} alt="" />
                                    <div className="around-user-info">
                                        <h4>Jack McKinney</h4>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>
                            </div>
                            <div className="single-around">
                                <p>“As quantum mechanics developed further, it turned out that there were a large number of things which were not directly encompassed in the Schrödinger equation—such as the spin of the electron, and various relativistic phenomena. The mathematics that is involved is particularly simple, involving simple algebraic operations and no differential equations or at most only very simple ones. But they are, we assure you, by all odds the simplest parts—in a deep sense of the word—as well as the most basic parts. This is frankly a pedagogical experiment; it has never been done before, as far as we know.”</p>
                                <div className="around-user">
                                    <img src={user} alt="" />
                                    <div className="around-user-info">
                                        <h4>Jack McKinney</h4>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                        <AiFillStar></AiFillStar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Around;