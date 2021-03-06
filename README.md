# **Readme**

### **Introduction**

Backend API to take in data from REST endpoint using serverless framework and Ansible

## dependencies

Ensure these are installed before going further:

- install serverless framework https://serverless.com/framework/docs/getting-started/
- install npm: https://nodejs.org/en/download/
- install Ansible: https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html

## development

### 0. setup

- Navigate to root folder `dev/services`
- create config.js file and populate appropriately using the configsample.js file
- run `npm install` in root folder to install dependencies

### 1. run

#### to run using ansible

- make sure you are in the root folder `dev/services`
- build the application by running `ansible all -a "sls deploy" -i inventory`
- To remove installed serverless application, run `ansible all -a "sls remove --stage dev" -i inventory`

#### to run using serverless commands

- make sure you are in the root folder `dev/services`
- build the application by running `sls deploy`
- To remove installed serverless application, run `sls remove --stage dev`
