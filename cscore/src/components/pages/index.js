import React from "react";
import {Row, Container} from "reactstrap";

function Home() {
    return (
        <Container class="home">
            <Row>
                <h1>CScore Level Helper</h1>
            </Row>
            <Row>
                <form>
                    <label>
                        Current Base VAPs:
                        <input type="text" />
                    </label>
                </form>
            </Row>
            <Row>
                <form>
                    <label>
                        Current Duos:
                        <input type="text" />
                    </label>
                </form>
            </Row>
            <Row>
                <form>
                    <label>
                        Current Smarts + Internet:
                        <input type="text" />
                    </label>
                </form>
            </Row>
            <Row>
                <form>
                    <label>
                        Current Androids:
                        <input type="text" />
                    </label>
                </form>
            </Row>
            <Row>
                <form>
                    <label>
                        Current New Activations:
                        <input type="text" />
                    </label>
                </form>
            </Row>
            <Row>
                <form>
                    <label>
                        Current Accessory Comm:
                        <input type="text" />
                    </label>
                </form>
            </Row>
            <Row>
                <form>
                    <label>
                        Current Devices:
                        <input type="text" />
                    </label>
                </form>
            </Row>
            <Row>
                <form>
                    <label>
                        Current iVAPs:
                        <input type="text" />
                    </label>
                </form>
            </Row>
            <Row>
                <form>
                    <label>
                        Current B2B Devices:
                        <input type="text" />
                    </label>
                </form>
            </Row>
            <input type="submit" value="Submit" />
        </Container>
    );
}

export default Home;