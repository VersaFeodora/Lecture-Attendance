import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/atoms/header";
import styles from "./desktop3.module.css";

const Desktop3: NextPage = () => {
  const router = useRouter();

  const onPhstudentBoldIconClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onIconParkOutlinelogoutClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.lectureInfo}>
      <img className={styles.lectureInfoChild} alt="" src="/rectangle-1.svg" />
      <div className={styles.lectureInfoItem} />
      <img
        className={styles.phstudentBoldIcon}
        alt=""
        src="/phstudentbold2.svg"
        onClick={onPhstudentBoldIconClick}
      />
      <img
        className={styles.iconParkOutlinelogout}
        alt=""
        src="/iconparkoutlinelogout2.svg"
        onClick={onIconParkOutlinelogoutClick}
      />
      <img
        className={styles.lucidefileSpreadsheetIcon}
        alt=""
        src="/lucidefilespreadsheet2.svg"
      />
      <Header
        dASHBOARD="LECTURE"
        messageSquareIconTop="1.5px"
        messageSquareIconLeft="-66px"
        messageSquareIconDisplay="flex"
        messageSquareIconWidth="186px"
        messageSquareIconHeight="35px"
      />
      <img
        className={styles.polinemaLogo1Icon}
        alt=""
        src="/polinemalogo-11@2x.png"
      />
      <img
        className={styles.polinemaLogo2Icon}
        alt=""
        src="/polinemalogo-2@2x.png"
      />
      <div className={styles.descLecture3}>
        <div className={styles.descLecture3Child} />
        <b className={styles.shaheenUddinAhmad}>Shaheen Uddin Ahmad</b>
        <img
          className={styles.descLecture3Item}
          alt=""
          src="/ellipse-7@2x.png"
        />
        <b className={styles.lectureDesciption}>Lecture Desciption</b>
      </div>
    </div>
  );
};

export default Desktop3;
