/* eslint-disable jsx-quotes */
import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { switchSkillStatus, timers, useStore } from "../../store";
import { SkillBar } from "../../components";
import UserBox from "./userBox";
import "./index.scss";

export default function Index() {
  const { openStatus } = useStore(switchSkillStatus);
  const userList = useStore(timers);

  return (
    <View className="wrapper">
      <View className="close">×</View>
      <View className={`${!openStatus ? "skillOpen" : "skillClose"}`}>
        <UserBox userList={userList} />
      </View>
      <View className={`${openStatus ? "skillOpen" : "skillClose"}`}>
        <SkillBar />
      </View>
    </View>
  );
}
