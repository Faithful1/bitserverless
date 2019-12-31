# **Readme**

### **Introduction**

Backend API to take in data from REST endpoint using serverless framework and Ansible

## Run the sls app as a docker container

A docker stack for production env

## dependencies

Ensure these are installed before going further:

- install serverless framework https://serverless.com/framework/docs/getting-started/
- install npm: https://nodejs.org/en/download/
- install Ansible: https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html

## development

### 0. setup

    create config.js file and populate appropriately using the configsample.js file

### 1. run

- build the application by running `ansible all -a "sls deploy" -i inventory` (print status)
- To remove installed serverless application, run `ansible all -a "sls remove --stage dev" -i inventory`
