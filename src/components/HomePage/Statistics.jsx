import React from 'react';
import { motion } from 'framer-motion';
import "../../styles/Statistics.css";
import study from "../../assets/icon_study.png";
import chto from "../../assets/25+.png";
import wheel from "../../assets/icon_wheel.png";
import time from "../../assets/icon_time.png";



const Statistics = () => {
  const stats = [
    { id: 0,  img: study, value: "1000+", label: "1000+ довольных клиентов" },
    { id: 1, img: chto, value: "25+", label: "Более 25 лет стаж работы" },
    { id: 2, img: wheel, label: "1.5 Часа-время одного занятия" },
    { id: 3, img: time, value: "50+", label: "Занятия в удобное время" },
  ];
  return (
    <section id='stata' className="statistics">
      {stats.map((stat) => (
        <div className='stat-item-parent'>
        <motion.div
          key={stat.id}
          className="stat-item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: stat.id * 0.2 }}
        >
        <img src={stat?.img}/>
        </motion.div>
          <h3>{stat.label}</h3>
        </div>
      ))}
    </section>
  );
};

export default Statistics;
