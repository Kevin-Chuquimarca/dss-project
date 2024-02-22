## Instrucciones para Configurar y Ejecutar los Microservicios STUDENTS y BOOKS

### Requisitos:

- Java 21
- Maven 3.9.6

### SERVICIO STUDENTS

1. **Crear la base de datos:**
   Ejecuta el siguiente comando en la terminal: `./db/students.sql`

2. **Cambiar el usuario y contraseña de la BD:**
   En el archivo `./students/src/main/resources/application.yml`, modifica el usuario y contraseña según sea necesario.

3. **Ingresar a la carpeta del proyecto:**
   Ejecuta el siguiente comando en la terminal: `cd ./students`

4. **Ejecutar la aplicación:**
   Ejecuta el siguiente comando en la terminal: `mvn spring-boot:run`

La aplicación se iniciará en el puerto 8080. Puedes acceder a ella en tu navegador web a través de la dirección [http://localhost:8080](http://localhost:8080).

#### RUTAS
- [http://localhost:8080/v1/auth/welcome](http://localhost:8080/v1/auth/welcome)

### SERVICIO BOOKS

1. **Crear la base de datos:**
   Ejecuta el siguiente comando en la terminal: `./db/books.sql`

2. **Cambiar el usuario y contraseña de la BD:**
   En el archivo `./books/src/main/resources/application.yml`, modifica el usuario y contraseña según sea necesario.

3. **Ingresar a la carpeta del proyecto:**
   Ejecuta el siguiente comando en la terminal: `cd ./books`

4. **Ejecutar la aplicación:**
   Ejecuta el siguiente comando en la terminal: `mvn spring-boot:run`

La aplicación se iniciará en el puerto 8090. Puedes acceder a ella en tu navegador web a través de la dirección [http://localhost:8090](http://localhost:8090).

#### RUTAS
- [http://localhost:8090/v1/books](http://localhost:8090/v1/books)
- [http://localhost:8090/v1/authors](http://localhost:8090/v1/authors)
