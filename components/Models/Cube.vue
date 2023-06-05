<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from "vue";
    import * as THREE from "three";
    import { WebGLRenderer } from "three";

    const props = defineProps({
        width: {
            type: Number || undefined,
            default: () => 300
        },
        height: {
            type: Number || undefined,
            default: () => 300
        }
    })

    const scene = new THREE.Scene();
    let renderer: WebGLRenderer;

    const canvasRef = ref();

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshStandardMaterial({ color: "mediumpurple" });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(0, 0, -2);

    scene.add(box);

    const ambientLight = new THREE.AmbientLight("#ffffff", 1);
    scene.add(ambientLight);

    let camera = new THREE.PerspectiveCamera( 75, props.width / props.width, 0.1, 100);
    camera.position.y = 1;
    camera.position.z = 2;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    scene.add(camera);

    const loop = () => {
        box.rotation.y += 0.02;
        renderer.render(scene, camera);
    };
    const resizeCallback = () => {
        renderer.setSize(props.width, props.height);
        camera.aspect = props.width / props.width;
        camera.updateProjectionMatrix();
    };

    onMounted(() => {
        renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.value,
            antialias: true,
            alpha: true,
        });
        renderer.setSize(props.width, props.height);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.render(scene, camera);

        renderer.setAnimationLoop(loop);
    });

    watch(() => props.width, resizeCallback)

    watch(() => props.height, resizeCallback)

    onUnmounted(() => {
        renderer.setAnimationLoop(null);
        window.removeEventListener("resize", resizeCallback);
    });
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>