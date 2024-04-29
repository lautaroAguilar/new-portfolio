'use client'
// BackgroundAnimation.js

import React, { useRef, useEffect } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    // Compilando shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Creando programa de shader
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Configurando atributos y uniformes
    const positionAttributeLocation = gl.getAttribLocation(shaderProgram, 'a_position');
    const resolutionUniformLocation = gl.getUniformLocation(shaderProgram, 'u_resolution');
    const timeUniformLocation = gl.getUniformLocation(shaderProgram, 'u_time');

    // Creando buffer de posiciones
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const render = (time) => {
      gl.uniform1f(timeUniformLocation, time / 10000); // Reducir aún más la velocidad de cambio
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(render);
    };

    render(0);

    return () => {
      // Limpieza al desmontar el componente
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
      width={window.innerWidth}
      height={window.innerHeight}
    ></canvas>
  );
};

export default BackgroundAnimation;

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  uniform float u_time;
  uniform vec2 u_resolution;

  // Función para generar un valor de ruido aleatorio
  float random(float x) {
    return fract(sin(x) * 43758.5453);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    // Convertir a blanco y negro y hacer la animación más suave
    vec3 color = vec3(0.0);

    // Agregar efecto de grano con píxeles más grandes y reducir la intensidad
    float grain = random(u_time + gl_FragCoord.x + gl_FragCoord.y * 0.1) * 0.1; // Reducir la intensidad del grano
    color += grain;

    gl_FragColor = vec4(color, 1.0);
  }
`;

