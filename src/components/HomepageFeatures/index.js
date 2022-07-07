import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "About Me",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Backend, DevOps engineer, also have experience in frontend
        <div className={styles.callForAction}>
          <Link
            className="button button--secondary button--lg"
            to="https://kimi0230.github.io/about/"
          >
            About Me
          </Link>
        </div>
      </>
    ),
  },
  {
    title: "Docs",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Take notes of something I learn.
        <br /> Backend, AWS, Frotend etc...
        <div className={styles.callForAction}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docs
          </Link>
        </div>
      </>
    ),
  },
  {
    title: "Blog",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Some interesting ~
        <div className={styles.callForAction}>
          <Link className="button button--secondary button--lg" to="/blog">
            Blog
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
