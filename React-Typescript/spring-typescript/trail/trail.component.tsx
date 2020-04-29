import React, { useState } from "react";
import { render } from "react-dom";
import { useTrail, animated } from "react-spring";
import styles from "./main-info-trail.module.scss";

const MainInfoTrail = () => {
  const items = ["Lorem", "ipsum", "dolor", "sit"];
  const config = { mass: 5, tension: 2000, friction: 200 };

  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className={styles.trailsMain} onClick={() => set((state) => !state)}>
      <div>
        {
          //@ts-ignore
          trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className={styles.trailsText}
              style={{
                ...rest,

                transform: x.interpolate(
                  (x: number) => `translate3d(0,${x}px,0)`
                ),
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))
        }
      </div>
    </div>
  );
};

export default MainInfoTrail;
