import React, { useState } from "react"
import Chatcorner from "./chatcorner"

function Dashboard() {
  return (
    <>
        <nav id="scrollspy" class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top" data-spy="affix" data-offset-top="20">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="assets/imgs/logo.png" alt="" class="brand-img" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <h2 class="title">Tricko-Chatbot</h2>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

        <header id="home" class="header">


            <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">

                <div class="container">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="carousel-title">Get Your<br />Queries Solved</h3>
                                <button class="btn btn-primary btn-rounded">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="section" id="about">

            <div class="container">

                <div class="row align-items-center mr-auto">
                    <div class="col-md-4">
                        
                        <h3 class="section-title">About Us</h3>
                        <p>This Chatbot is Being Created to solve student's queries without disturbing any of the administrative department!</p>

                    </div>
                    <div class="col-sm-6 col-md-4 ml-auto">
                        <div class="widget">
                            <div class="icon-wrapper">
                                <i class="ti-calendar"></i>
                            </div>
                            <div class="infos-wrapper">
                                <h4 class="text-primary">User Friendly</h4>
                                <p>User Friendly Chatbot to communicate wih you</p>
                            </div>
                        </div>
                        <div class="widget">
                            <div class="icon-wrapper">
                                <i class="ti-face-smile"></i>
                            </div>
                            <div class="infos-wrapper">
                                <h4 class="text-primary">Images</h4>
                                <p>Works with Images Too!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="widget">
                            <div class="icon-wrapper">
                                <i class="ti-star"></i>
                            </div>
                            <div class="infos-wrapper">
                                <h4 class="text-primary">HyperLinks</h4>
                                <p>HyperLinks to Important Websites are provided</p>
                            </div>
                        </div>
                        <div class="widget">
                            <div class="icon-wrapper">
                                <i class="ti-user"></i>
                            </div>
                            <div class="infos-wrapper">
                                <h4 class="text-primary">DialogFlow</h4>
                                <p>Uses DialogFlow to communicate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
                <div class="container">

                    <h3 class="section-title mb-4">Tricko-ChatBot</h3>

                    <div class="row text-center">
                        <div class="col-lg-4">
                            <a href="javascript:void(0)" class="card border-0 text-dark">
                                <img class="card-img-top" src="assets/imgs/img-5.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page" />

                            </a>
                        </div>
                        <div class="col-lg-4">
                            <a href="javascript:void(0)" class="card border-0 text-dark">
                                <img class="card-img-top" src="assets/imgs/img-6.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page" />

                            </a>
                        </div>
                        <div class="col-lg-4">
                            <a href="javascript:void(0)" class="card border-0 text-dark">
                                <img class="card-img-top" src="assets/imgs/img-7.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page" />

                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Chatcorner />

        </>
    );
      
}

export default Dashboard;
