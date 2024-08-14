// src/components/Category.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/dashboardSlice';
import Widget from './Widget';

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now(),
      name: newWidgetName,
      text: newWidgetText,
    };
    dispatch(addWidget({ categoryId: category.id, widget: newWidget }));
    setNewWidgetName('');
    setNewWidgetText('');
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      {category.widgets.map((widget) => (
        <Widget
          key={widget.id}
          widget={widget}
          categoryId={category.id}
        />
      ))}
      <div className="add-widget">
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={newWidgetText}
          onChange={(e) => setNewWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
    </div>
  );
};

export default Category;
