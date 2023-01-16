## Getting started

### 1. Install Node.js

You need to have npm installed in your computer for this problem. It comes with Node.js and you can get it by installing Node from https://nodejs.org/en/

### 2. Install dependencies

Run `npm install` to install all dependencies.

## Usage

### 1. Help

Executing the command without any arguments, or with a single argument help prints the CLI usage.

![todo help](https://user-images.githubusercontent.com/68139593/212684466-4d1e88d3-d332-4fbb-b9c8-d0fb1f8478bf.jpg)


### 2. List all pending items

Use the ls command to see all the items that are not yet complete, in ascending order of priority.

```
[index] [task] [priority]
```

Example:

![todo ls](https://user-images.githubusercontent.com/68139593/212684658-9bd8f119-10d2-48f8-bffd-b8849e03f561.jpg)


### 3. Add a new item

Use the add command.

```
[command] [priority] [task]
```

![todo add](https://user-images.githubusercontent.com/68139593/212685768-be0f6f9d-1758-4234-b10a-2f7a9fe64a98.jpg)

### 4. Delete an item

Use the del command to remove an item by its index.

```
$ ./task del 3
Deleted item with index 3
```

![todo delete](https://user-images.githubusercontent.com/68139593/212685865-19600f25-a707-4327-a50a-96d7e56000ca.jpg)

Attempting to delete a non-existent item will display an error message.

```
$ ./task del 5
Error: Task does not exist. Please enter a valid task number
```

```
$ ./task del 5
Error: List is empty. Nothing to delete
```

### 5. Mark a task as completed

Use the done command to mark an item as completed by its index.

```
$ ./task done 1
Marked item as done.
```
![todo done](https://user-images.githubusercontent.com/68139593/212687280-68eade45-a9fe-4e1b-b426-bfbac113b08f.jpg)


### 6. Generate a report

Show the number of complete and pending items in the list. and the complete and incomplete items grouped together.

![todo report](https://user-images.githubusercontent.com/68139593/212687471-d275b9aa-6950-497b-9f53-87e4c2938688.jpg)


### 7. Clear List

clear the pending and completed list both.

![todo clear](https://user-images.githubusercontent.com/68139593/212687586-2a73a58c-a03f-4414-86ad-3cfa608127dc.jpg)
