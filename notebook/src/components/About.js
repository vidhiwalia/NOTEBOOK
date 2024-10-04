import React, { useContext, useEffect } from 'react'
import noteContext from './context/Notecontext'
import './css/about.css';
export default function About() {

  return (

    <div>
      <centre>
        <h1>ABOUT</h1>
      </centre>

      <section class="card-container">
        <div class="card">
          <img src="https://cdn.pixabay.com/photo/2023/02/04/17/28/chat-7767693_1280.jpg" alt="Image 1"/>
            <div class="card-content">
              <h3>This is some title</h3>
              <p>Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue
                bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.</p>
              <a href="#">Read more</a>
            </div>
        </div>
        <div class="card">
          <img src="https://i.etsystatic.com/30134249/r/il/4277dd/3161817690/il_1588xN.3161817690_j0un.jpg" alt="Image 2"/>
            <div class="card-content">
              <h3>This is some title</h3>
              <p>Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue
                bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.</p>
              <a href="#">Read more</a>
            </div>
        </div>
        <div class="card">
          <img src="https://a.storyblok.com/f/177206/493x300/e1bd2af332/virtual-reality-vr.PNG/m/" alt="Image 3"/>
            <div class="card-content">
              <h3>This is some title</h3>
              <p>Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue
                bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.</p>
              <a href="#">Read more</a>
            </div>
        </div>
        <div class="card">
          <img src="https://img.freepik.com/premium-photo/immersive-virtual-reality-gaming_810293-101098.jpg" alt="Image 4"/>
            <div class="card-content">
              <h3>This is some title</h3>
              <p>Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue
                bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.</p>
              <a href="#">Read more</a>
            </div>
        </div>
        <div class="card">
          <img src="https://img.freepik.com/premium-photo/immersive-virtual-reality-gaming_810293-101098.jpg" alt="Image 5"/>
            <div class="card-content">
              <h3>This is some title</h3>
              <p>Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue
                bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.</p>
              <a href="#">Read more</a>
            </div>
        </div>
        <div class="card">
          <img src="https://img.freepik.com/premium-photo/immersive-virtual-reality-gaming_810293-101098.jpg" alt="Image 6"/>
            <div class="card-content">
              <h3>This is some title</h3>
              <p>Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue
                bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.</p>
              <a href="#">Read more</a>
            </div>
        </div>
      </section>
    </div>
  )
}


