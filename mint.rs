use std::io::{self, Write};

fn main() { 
    println!("Simple Calculator");
    loop {
        let mut input = String::new(); 
        print!("Enter operation (or 'exit' to quit): ");
        io::stdout().flush().unwrap(); // Ensure the prompt is displayed immediately
        io::stdin().read_line(&mut input).unwrap(); // Read user input
        input = input.trim().to_string(); // Remove newline character

        if input.to_lowercase() == "exit" {
            println!("Exiting...");
            break; 
        }number
     
        let parts: Vec<&str> = input.split_whitespace().collect();
        if parts.len() != 3 {
            println!("Invalid input. Please enter in the format: <number> <operator> <number>");
            continue;
        } 

        match parts[1] {
            "+" => {
                let result = parts[0].parse::<f32>().unwrap() + parts[2].parse::<f32>().unwrap();
                println!("Result: {}", result);
            }
            "-" => {
                let result = parts[0].parse::<f32>().unwrap() - parts[2].parse::<f32>().unwrap();
                println!("Result: {}", result);
            }
            "*" => { 
                let result = parts[0].parse::<f32>().unwrap() * parts[2].parse::<f32>().unwrap();
                println!("Result: {}", result);
            }
            "/" => { 
                if parts[2].parse::<f32>().unwrap() == 0.0 {
                    println!("Cannot divide by zero.");
                } else {
                    let result = parts[0].parse::<f32>().unwrap() / parts[2].parse::<f32>().unwrap();
                    println!("Result: {}", result);
                }
            }
            _ => println!("Unknown operator."),
        }
    }
}

