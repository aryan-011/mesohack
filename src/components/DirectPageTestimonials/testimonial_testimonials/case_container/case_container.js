import React from 'react'
import {useState} from 'react';
import Cases from '../testimonial_case/case_test'
import './case_container.css'
import ArrowD from './arrowDown.png'

function Case_container() {
    const [readMore,setReadMore]=useState(false);

    const obj1 = { name: 'Bob Brown', casen: '1', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ',alter:1 };

    const obj2 = { name: 'Cyrus Green', casen: '2', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ',alter:1 };

    const obj3 = { name: 'Shah Rukh', casen: '3', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ',alter:1 };

    const obj4 = { name: 'Sam Young', casen: '4', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ',alter:1 };

    const obj5 = { name: 'Iris Yang', casen: '5', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ' };

    const obj6 = { name: 'Iris Yang', casen: '6', details: 'Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. Proin tincidunt auctor nisl, vel vehicula tellus condimentum nec. ' };
    const array = [obj1, obj2, obj3, obj4, obj5, obj6,obj1,obj2,obj3]
    const linkName=readMore?'Read Less':'Read More'
    const size=readMore?true:false

        return (
        <>
            <div className='testimonialCaseCont'>
                <div className='slider'>
                    {(size?array:array.slice(0,4)).map((_, index) => {
                        if(!size && index>5){
                            
                        }
                        if (index % 2 == 0) {

                            return (
                                <>
                                    <Cases {...array[index]} alter="false" />
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Cases  {...array[index]} alter="true"/>
                                </>
                            )
                        }
                    }
                    )}
                </div>
                <a onClick={()=>{setReadMore(!readMore)}} className='readMoreDiv'>
                    <div className='arrowDiv'>
                        <img className={linkName} src={ArrowD} alt='arrow' />
                    </div>
                    <a className='readMore' href='#'>{linkName}</a>
                </a>
            </div>
        </>
    )
}

export default Case_container