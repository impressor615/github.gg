import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled, { ThemeProvider } from 'styled-components';
import * as THREE from 'three';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

function testAnimate() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new THREE.FontLoader();

  loader.load('fonts/helvetiker_bold.typeface.json', font => {
    console.log(font);

    const geometry = new THREE.TextGeometry('챌린저', {
      bevelEnabled: true,
      bevelOffset: 0,
      bevelSegments: 5,
      bevelSize: 8,
      bevelThickness: 10,
      curveSegments: 12,
      font,
      height: 5,
      size: 80,
    });
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;
  });

  // const animate = function() {
  //   requestAnimationFrame(animate);

  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;

  //   renderer.render(scene, camera);
  // };

  // animate();
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Wrapper>
          <h1>hello world!</h1>
          {testAnimate()}
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
const Wrapper = styled.div`
  background: blue;
  ${props => props.theme.mq.down('mobile')`background: red;`}
  ${props => props.theme.mq.between('mobile', 'tablet')`background: skyblue;`}
`;

export default hot(App);
