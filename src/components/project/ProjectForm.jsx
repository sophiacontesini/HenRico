import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

export default function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:8000/categories', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(resp => {
        console.log('Response status:', resp.status);
        return resp.json();
      })
      .then(data => {
        console.log('Data:', data);
        setCategories(data);
      })
      .catch(err => console.log(err));
  }, []);

  const submit = e => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type='text'
        text='Nome do Projeto'
        name='name'
        placeholder='Insira o nome do seu projeto'
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type='number'
        text='Orçamento do Projeto'
        name='budget'
        placeholder='Insira o orçamento total'
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <Select
        name='category_id'
        text='Selecione a categoria'
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
