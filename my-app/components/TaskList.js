import { FlatList, Text } from "react-native";
import React from "react";

import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  const renderItem = ({ item }) => {
    return <TaskItem task={item}/>;
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id + ""} // keyExtractor requires a string
      renderItem={renderItem}
    />
  );
};

export default TaskList;
