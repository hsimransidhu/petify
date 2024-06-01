import React from 'react'

function Gallery(props) {
    return (
        <div className='container'>
            <h2>Care Provided for All Pets <span>By Certified Veterniary docs</span></h2>
            <section className='gallery'>
                {props.listItems.map(item =>
                    <div className="grid-item" key={item.id} >
                        <div className="poster">
                            <img src={item.image} />
                        </div>
                        <p className="movietitle">{item.name}</p>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Gallery;