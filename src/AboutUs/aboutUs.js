import React from "react";
import Navbar from "../Navbar/Navbar";
import './aboutUs.css';
const AboutUs = () => {
    return (
        <>
            <Navbar home={true} />
            <div className="AboutMain">
                <img className="landingBg1" src="../assets/bg4.jpg" alt="" />
                <img className="landingBg2" src="../assets/bg1.png" alt="" />
                <div className="aboutContainer">
                    <div className="aboutFlexContainer">
                        <div className="aboutHeadingContainer">
                            <h1>Our Vision</h1>
                        </div>
                        <div className="aboutParagraph">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat inventore asperiores sunt in! Dicta aliquam accusantium quasi iste cupiditate voluptatum facere nemo aperiam magni, voluptates numquam animi commodi est facilis assumenda fugit perspiciatis dolorem, rem, distinctio dolores dignissimos a minus eos nulla. Ullam aliquam atque fugit aperiam, laudantium sunt dolorem architecto quibusdam temporibus, eveniet perferendis laboriosam praesentium hic. Soluta dolor vitae iusto ipsam itaque fugit omnis eveniet molestias odio culpa in dignissimos facilis, veniam, ullam minima. Sunt maxime dolor iste obcaecati vero quis tempora, eveniet minima similique molestiae ut quibusdam, voluptatem consequuntur totam provident tenetur vel nobis nihil? Ea velit aliquid itaque temporibus iste vel, optio nisi nostrum delectus beatae ducimus, porro repellat voluptates dolorum sapiente ipsam vitae? Animi a ipsam magnam temporibus nemo sunt, corrupti doloribus expedita at dolore saepe sint quaerat iusto nesciunt quam iste incidunt dolorem maxime ratione rem. Sequi praesentium, commodi maxime temporibus impedit rem ducimus ratione earum dolorem nisi ullam sint at magnam odio reprehenderit amet. Quod, necessitatibus dolorem et animi aliquam libero corrupti saepe ullam at deserunt? Quos at deleniti, unde, qui quis dolorum esse itaque architecto quisquam cumque adipisci inventore! Consectetur eligendi adipisci, sapiente est harum dolorum, accusamus modi deleniti, illo molestiae vel.</p>
                        </div>
                        <div className="aboutServicesHeading">
                            <h1>Our Services :</h1>
                        </div>
                        <div className="aboutServicesPara">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda impedit doloremque ut excepturi asperiores ratione reprehenderit sint molestiae laudantium cumque. Sunt iusto at illum animi debitis alias consectetur incidunt et aut nemo id esse est voluptate laborum, delectus porro rem quaerat itaque deleniti dolorem, nisi qui! Rem est quos error minima magnam enim odit harum quo veniam minus rerum ipsum tempore dolorem, aperiam numquam, exercitationem alias nobis eveniet animi optio architecto nihil velit? Itaque et possimus laboriosam ipsam at vitae quas accusamus praesentium in id dolor inventore, atque, sequi voluptatum nostrum! Aliquam omnis ipsum doloribus delectus, minus exercitationem adipisci, vitae illo repudiandae maiores pariatur, quaerat veniam minima perferendis corporis architecto ullam praesentium blanditiis! Id illum dolor dicta quam corrupti obcaecati praesentium quas, eos omnis nisi voluptates deleniti inventore eaque quibusdam nostrum officiis. Aliquam voluptate illum maiores recusandae iste, consectetur accusantium unde saepe ratione ea dicta temporibus vitae quod atque tempore explicabo numquam? Est ab eius beatae impedit vel ratione dolorum odit ipsa vero, cum aut voluptatem asperiores mollitia hic illo repellat officia natus corporis laudantium ipsum. Assumenda officia tempora earum velit quo dolores obcaecati sequi perferendis odit, incidunt natus, numquam illum veniam. Debitis nostrum eius voluptate ratione dicta ullam omnis.</p>
                        </div>
                        <div className="aboutExploreServices">
                            <a href="/learn">Explore our services...</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default AboutUs;