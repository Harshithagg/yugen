import { lazy, Suspense, useRef, useEffect } from "react";
import "./RamenScene.css";
import { Component } from "react";

// If anything inside breaks, show nothing here instead of crashing the whole site
class SceneSafetyNet extends Component {
    state = { failed: false };

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch(error) {
        console.error("Ramen scene failed to load:", error);
    }

    render() {
        return this.state.failed ? null : this.props.children;
    }
}

// lazy = the heavy 3D code only downloads when the hero needs it
const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE_URL = "https://prod.spline.design/wGYw1TUOAQiejDS3/scene.splinecode";

// how strongly page scroll drives the Spline animation (you tune this)
const SPEED = 0.35;

function RamenScene({ progress, heroRef }) {
    const wrapRef = useRef(null);
    const canvasRef = useRef(null);
    const lastProgress = useRef(0);

    // runs once the 3D scene has finished loading
    const handleLoad = () => {
        canvasRef.current = wrapRef.current.querySelector("canvas");
    };

    useEffect(() => {
        lastProgress.current = progress.get();

        // every time the hero scroll progress changes...
        const stop = progress.on("change", (value) => {
            const canvas = canvasRef.current;
            const hero = heroRef.current;
            if (!canvas || !hero) return;

            // total pixels you scroll while the hero is pinned
            const distance = hero.offsetHeight - window.innerHeight;
            const deltaY = (value - lastProgress.current) * distance * SPEED;
            lastProgress.current = value;
            if (deltaY === 0) return;

            // ...tell Spline "the user scrolled by this much"
            canvas.dispatchEvent(
                new WheelEvent("wheel", { deltaY, bubbles: true, cancelable: true })
            );
        });

        return stop;
    }, [progress, heroRef]);

    return (
        <div className="scene" ref={wrapRef}>
            <SceneSafetyNet>
                <Suspense fallback={null}>
                    <Spline scene={SCENE_URL} onLoad={handleLoad} />
                </Suspense>
            </SceneSafetyNet>
        </div>
    );
}

export default RamenScene;