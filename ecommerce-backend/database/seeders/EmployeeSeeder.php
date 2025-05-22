// database/seeders/EmployeeSeeder.php
<?php

User::create([
  'name'=>'Admin',
  'email'=>'admin@example.com',
  'password'=>Hash::make('password'),
  'role'=>'employee'
]);
